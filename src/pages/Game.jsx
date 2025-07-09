import { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { Link } from 'react-router-dom'

export default function Game() {
  const gameRef = useRef(null)

  useEffect(() => {
    if (gameRef.current) return // unngå å lage spillet flere ganger

    const gameOptions = {
      width: 480,
      height: 640,
      gravity: 800
    }

    class JumpScene extends Phaser.Scene {
      constructor() {
        super({ key: 'JumpScene' })
      }

      preload() {
        this.load.image('platform', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Jump/platform.png')
        this.load.image('stripe', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Jump/stripe.png')
        this.load.spritesheet("codey", "https://content.codecademy.com/courses/learn-phaser/Codey%20Jump/codey.png", {
          frameWidth: 72,
          frameHeight: 90
        })
      }

      create() {
        this.anims.create({
          key: 'jump',
          frames: this.anims.generateFrameNumbers('codey', { start: 2, end: 3 }),
          frameRate: 10,
          repeat: -1,
        })

        this.physics.world.setBounds(0, 0, 480, 640)

        this.platforms = this.physics.add.group({ allowGravity: false, immovable: true })

        for (let i = 0; i < 8; i++) {
          let randomX = Math.floor(Math.random() * 400) + 24
          this.platforms.create(randomX, i * 80, 'platform').setScale(.5)
        }

        this.player = this.physics.add.sprite(100, 450, 'codey').setScale(.5)
        this.player.setBounce(1)
        this.player.setCollideWorldBounds(true)
        this.player.body.checkCollision.up = false
        this.player.body.checkCollision.left = false
        this.player.body.checkCollision.right = false

        this.physics.add.collider(this.player, this.platforms)
        this.cursors = this.input.keyboard.createCursorKeys()
        this.particles = this.add.particles('stripe')
        this.platformCount = 0
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
            scale: .5,
            quantity: 5,
            blendMode: 'ADD'
          })
        }

        if (this.player.body.y < gameOptions.height / 2) {
          this.platforms.children.iterate((platform) => {
            let delta = Math.floor(gameOptions.height / 2) - this.player.y
            if (delta > 0) {
              platform.y += delta / 30
            }

            if (platform.y > 640) {
              platform.y = -platform.height
              platform.x = Math.floor(Math.random() * 400) + 24
              this.platformCount++
            }
          })
        }

        this.player.anims.play('jump', true)
      }
    }

    const config = {
      type: Phaser.AUTO,
      width: gameOptions.width,
      height: gameOptions.height,
      backgroundColor: '#0d0d0d',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: gameOptions.gravity },
        },
      },
      scene: JumpScene,
      parent: 'game-container',
    }

    gameRef.current = new Phaser.Game(config)
  }, [])

  
  return (
  <>
    <Link
      to="/projects/games"
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 10,
        background: '#00ffcc',
        color: '#0d0d0d',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        fontWeight: 'bold',
        textDecoration: 'none',
      }}
    >
      ← Tilbake
    </Link>

    <div
      id="game-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#0d0d0d',
      }}
    />
  </>
)

}
