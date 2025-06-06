import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    const singer = new Character('arijit', 'singh', 'singer');
    expect(singer).toEqual({
      firstName: 'arijit',
      lastName: 'singh',
      role: 'singer',
      level: 1,
      strength: expect.any(Number),
      charisma: expect.any(Number),
      constitution: expect.any(Number),
      dexterity: expect.any(Number),
      intelligence: expect.any(Number),
      wisdom: expect.any(Number),
      id: expect.stringContaining('person-'),
      createdAt: expect.any(Date),
      lastModified: expect.any(Date),
    });
  });

  it('should allow you to increase the level', () => {
    const singer = new Character('arijit', 'singh', 'singer');
    expect(singer.level).toBe(1);
    singer.levelUp();
    expect(singer.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    const singer = new Character('arijit', 'singh', 'singer');
    let prevLastModified = singer.lastModified;
    singer.levelUp();
    expect(singer.lastModified).not.toBe(prevLastModified);
    // expect(singer.lastModified).toBeGreaterThan(prevLastModified);
  });
});
