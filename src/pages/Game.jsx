// Videre utviklings ideer: game over skjerm, kanskje støttes for mobil?

import { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { Link } from 'react-router-dom'

export default function Game() {
  const gameRef = useRef(null)

  useEffect(() => {
    if (gameRef.current) return

    const gameOptions = {
      width: 480,
      height: 640,
      gravity: 800,
    }

    class JumpScene extends Phaser.Scene {
      constructor() {
        super({ key: 'JumpScene' })
      }

      preload() {
        this.load.image('platform', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Jump/platform.png')
        this.load.image('stripe', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Jump/stripe.png')
        this.load.spritesheet('codey', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Jump/codey.png', {
          frameWidth: 72,
          frameHeight: 90,
        })
      }

      create() {
        this.anims.create({
          key: 'jump',
          frames: this.anims.generateFrameNumbers('codey', { start: 2, end: 3 }),
          frameRate: 10,
          repeat: -1,
        })

        this.physics.world.setBounds(0, 0, gameOptions.width, gameOptions.height)

        this.platforms = this.physics.add.group({ allowGravity: false, immovable: true })
        const spacing = 100
        for (let i = 0; i < 8; i++) {
          let randomX = Phaser.Math.Between(24, 400)
          this.platforms.create(randomX, i * spacing, 'platform').setScale(0.5).refreshBody()
        }

        this.player = this.physics.add.sprite(100, 300, 'codey').setScale(0.5)
        this.player.setBounce(1)
        this.player.setCollideWorldBounds(true)
        this.player.body.checkCollision.up = false
        this.player.body.checkCollision.left = false
        this.player.body.checkCollision.right = false

        this.physics.add.collider(this.player, this.platforms)

        this.cursors = this.input.keyboard.createCursorKeys()
        this.particles = this.add.particles('stripe')
        this.platformCount = 0

    this.score = 0
    this.highScore = parseInt(localStorage.getItem('highScore')) || 0

    this.scoreText = this.add.text(16, 16, 'Score: 0', {
        fontSize: '18px',
        fill: '#ff66cc',
        fontFamily: 'monospace',
        backgroundColor: '#fff0fa',
        padding: { x: 8, y: 4 },
        borderRadius: 4
    }).setScrollFactor(0)

    this.highScoreText = this.add.text(16, 40, `Highscore: ${this.highScore}`, {
        fontSize: '14px',
        fill: '#b347cc',
        fontFamily: 'monospace',
        backgroundColor: '#f9e6ff',
        padding: { x: 6, y: 3 },
    }).setScrollFactor(0)

        // Kamera følger spilleren mykt
        this.cameras.main.setBounds(0, 0, gameOptions.width, gameOptions.height * 100)
        this.cameras.main.startFollow(this.player, true, 0.05, 0.05)
      }

      hasPlatformAbovePlayer() {
        let found = false
        this.platforms.children.iterate((platform) => {
          if (platform.y < this.player.y - 50) {
            found = true
          }
        })
        return found
      }

      update() {
        if (this.cursors.left.isDown) {
          this.player.setVelocityX(-240)
          this.player.flipX = true
        } else if (this.cursors.right.isDown) {
          this.player.setVelocityX(240)
          this.player.flipX = false
        } else {
          this.player.setVelocityX(0)
        }

        if (this.player.body.touching.down) {
          this.player.setVelocityY(-500)
          this.cameras.main.shake(100, 0.004)
        }

        if (this.platformCount > 10 && !this.emitter) {
          this.emitter = this.particles.createEmitter({
            x: { min: 0, max: gameOptions.width },
            y: gameOptions.height + 10,
            lifespan: 2500,
            speedY: { min: -300, max: -500 },
            scale: 0.5,
            quantity: 5,
            blendMode: 'ADD',
          })
        }

        if (this.player.body.y < gameOptions.height / 2) {
          this.platforms.children.iterate((platform) => {
            let delta = Math.floor(gameOptions.height / 2) - this.player.y
            if (delta > 0) {
              platform.y += delta / 30
            }

            if (platform.y > this.player.y + 400) {
              platform.y = this.player.y - Phaser.Math.Between(100, 130)
              platform.x = Phaser.Math.Between(24, 400)
              this.platformCount++
              this.score += 1
                this.scoreText.setText(`Score: ${this.score}`)

            if (this.score > this.highScore) {
                this.highScore = this.score
                this.highScoreText.setText(`Highscore: ${this.highScore}`)
                localStorage.setItem('highScore', this.highScore)
            }
              platform.refreshBody()
            }
          })
        }

        // Hvis ingen plattformer over spilleren, lag en ny
        if (!this.hasPlatformAbovePlayer()) {
          const x = Phaser.Math.Between(24, 400)
          const y = this.player.y - Phaser.Math.Between(110, 140)
          this.platforms.create(x, y, 'platform').setScale(0.5).refreshBody()
        }

        this.player.anims.play('jump', true)
      }
    }

    const config = {
      type: Phaser.AUTO,
      width: gameOptions.width,
      height: gameOptions.height,
      backgroundColor: '#ffe6f7', // Rosa pastell 💖
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: gameOptions.gravity },
        },
      },
      scene: JumpScene,
      parent: 'game-container',
    }

    try {
      gameRef.current = new Phaser.Game(config)
    } catch (err) {
      console.error('Phaser feilet ved init:', err)
    }
  }, [])

  return (
    <div
      style={{
        backgroundColor: '#ffe6f7',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column',
      }}
    >
      <Link
        to="/games"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
          background: '#e0b3ff',
          color: '#1a1a1a',
          padding: '0.6rem 1rem',
          borderRadius: '999px',
          fontWeight: 'bold',
          textDecoration: 'none',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        }}
      >
        ← Tilbake
      </Link>

      <div
        id="game-container"
        style={{
          width: '480px',
          height: 'min(95vh, 640px)',
          maxWidth: '100%',
          border: '4px solid #ffccff',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 0 30px rgba(255, 153, 255, 0.5)',
          backgroundColor: '#fff0fa',
        }}
      />
    </div>
  )
}
