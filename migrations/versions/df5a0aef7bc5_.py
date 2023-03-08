"""empty message

Revision ID: df5a0aef7bc5
Revises: 
Create Date: 2023-03-01 18:57:59.963476

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'df5a0aef7bc5'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('quincenal')
    with op.batch_alter_table('calendar_booking', schema=None) as batch_op:
        batch_op.add_column(sa.Column('visit_day', sa.String(length=120), nullable=True))

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('photo', sa.String(length=120), nullable=True))
        batch_op.create_unique_constraint(None, ['photo'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('photo')

    with op.batch_alter_table('calendar_booking', schema=None) as batch_op:
        batch_op.drop_column('visit_day')

    op.create_table('quincenal',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('date', postgresql.TIMESTAMP(), autoincrement=False, nullable=False),
    sa.Column('incidences', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.Column('comments', sa.VARCHAR(length=250), autoincrement=False, nullable=True),
    sa.Column('resident_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['resident_id'], ['resident.id'], name='quincenal_resident_id_fkey'),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name='quincenal_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='quincenal_pkey')
    )
    # ### end Alembic commands ###
