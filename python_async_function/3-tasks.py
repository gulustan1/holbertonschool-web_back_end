#!/usr/bin/env python3
""" Task creation module using asyncio. """
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int = 10) -> asyncio.Task:
    """
    Creates and returns an asyncio.Task for wait_random.

    Args:
        max_delay (int): Maximum delay in seconds for wait_random.

    Returns:
        asyncio.Task: Task object wrapping wait_random coroutine.
    """
    return asyncio.create_task(wait_random(max_delay))
