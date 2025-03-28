"""empty message

Revision ID: dbcafa49f037
Revises: 128329077334
Create Date: 2025-03-27 02:29:05.038215

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dbcafa49f037'
down_revision = '128329077334'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('company', schema=None) as batch_op:
        batch_op.add_column(sa.Column('phone', sa.String(), nullable=False))
        batch_op.add_column(sa.Column('schedule', sa.String(), nullable=False))
        batch_op.add_column(sa.Column('description', sa.String(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('company', schema=None) as batch_op:
        batch_op.drop_column('description')
        batch_op.drop_column('schedule')
        batch_op.drop_column('phone')

    # ### end Alembic commands ###
