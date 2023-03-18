"""empty message

Revision ID: 52ce9f1d7c29
Revises: 
Create Date: 2023-03-18 09:13:21.688868

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '52ce9f1d7c29'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('night_report',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.Column('incidences', sa.Boolean(), nullable=False),
    sa.Column('comments', sa.String(length=250), nullable=True),
    sa.Column('sugar_level', sa.String(length=80), nullable=False),
    sa.Column('oxygen_level', sa.String(length=80), nullable=False),
    sa.Column('cholesterol_level', sa.String(length=80), nullable=False),
    sa.Column('leukocytes_level', sa.String(length=80), nullable=False),
    sa.Column('redbloods_level', sa.String(length=80), nullable=False),
    sa.Column('whitebloods_level', sa.String(length=80), nullable=False),
    sa.Column('resident_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['resident_id'], ['resident.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('quincenal',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.Column('incidences', sa.Boolean(), nullable=False),
    sa.Column('comments', sa.String(length=250), nullable=True),
    sa.Column('sugar_level', sa.String(length=80), nullable=False),
    sa.Column('oxygen_level', sa.String(length=80), nullable=False),
    sa.Column('cholesterol_level', sa.String(length=80), nullable=False),
    sa.Column('leukocytes_level', sa.String(length=80), nullable=False),
    sa.Column('redbloods_level', sa.String(length=80), nullable=False),
    sa.Column('whitebloods_level', sa.String(length=80), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('resident_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['resident_id'], ['resident.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('quincenal')
    op.drop_table('night_report')
    # ### end Alembic commands ###
